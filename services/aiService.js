import axios from 'axios';

// Gemini API key
const API_KEY = 'AIzaSyBfN2vJlra2DdNWDAQLHmJyNfDjvO8qwKU';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

/**
 * Send a message to the Gemini AI API
 * @param {Object} params - Parameters for the API call
 * @param {string} params.system_prompt - The system prompt for ManoMitra
 * @param {string} params.user_message - The user's message
 * @param {Array} params.conversation_history - Previous messages for context
 * @returns {Promise<string>} - The AI's response
 */
export const sendMessageToAI = async ({ system_prompt, user_message, conversation_history = [] }) => {
  try {
    // Format conversation history for context
    let contextText = '';
    if (conversation_history.length > 0) {
      contextText = conversation_history
        .map(msg => `${msg.sender === 'user' ? 'User' : 'ManoMitra'}: ${msg.text}`)
        .join('\n');
      contextText = `Previous conversation:\n${contextText}\n\n`;
    }

    // Prepare the prompt with system instructions and user message
    const fullPrompt = `${system_prompt}\n\n${contextText}User: ${user_message}`;

    // Prepare the request payload
    const requestData = {
      contents: [
        {
          parts: [
            {
              text: fullPrompt
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      }
    };

    // Make the API call
    const response = await axios.post(
      `${API_URL}?key=${API_KEY}`,
      requestData
    );

    // Extract and return the AI's response text
    if (response.data && 
        response.data.candidates && 
        response.data.candidates[0] && 
        response.data.candidates[0].content && 
        response.data.candidates[0].content.parts && 
        response.data.candidates[0].content.parts[0]) {
      return response.data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Unexpected API response format');
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
};

/**
 * Check if a message contains suicidal intent
 * @param {string} message - The user's message
 * @returns {Promise<boolean>} - Whether the message contains severe suicidal intent
 */
export const checkSuicidalIntent = async (message) => {
  try {
    // This would be a specialized API call to detect suicidal intent
    // For now, we'll use a simple keyword check as a placeholder
    const suicidalKeywords = [
      'kill myself', 'end my life', 'suicide', 'want to die', 
      'no reason to live', 'better off dead'
    ];
    
    const lowercaseMessage = message.toLowerCase();
    return suicidalKeywords.some(keyword => lowercaseMessage.includes(keyword));
  } catch (error) {
    console.error('Error checking suicidal intent:', error);
    return false; // Default to false if there's an error
  }
};

/**
 * Get the ManoMitra system prompt
 * @returns {string} - The complete system prompt for ManoMitra
 */
export const getManoMitraSystemPrompt = () => {
  return `You are ManoMitra, a friendly and empathetic mental health support chatbot. 
  Your goal is to provide emotional support, mental health awareness, and guidance. 
  You are not a doctor and should never prescribe medication or make clinical diagnoses. 
  Always maintain a supportive, kind, and non-judgmental tone. 
  Keep answers short (3–5 lines max), warm, and practical. 
  
  🗂️ Core Guidelines 
  
  Tone & Style 
  
  Speak like a caring friend who listens. 
  
  Be empathetic: acknowledge feelings before giving suggestions. 
  
  Use the user's name if they share it. 
  
  
  General Flow 
  
  Listen → Understand → Acknowledge → Suggest small actionable steps. 
  
  If unsure, gently ask clarifying questions. 
  
  Never sound robotic; always sound human-like. 
  
  Category-based Response Rules 
  
  Anxiety/Panic → breathing techniques, grounding exercises, journaling, exercise. 
  
  Depression/Low Mood → small goals, talk to someone, engage in hobbies, suggest counselling if sadness lasts >2 weeks. 
  
  Stress/Workload → time management, breaks, mindfulness, positive affirmations. 
  
  Sleep Issues → sleep hygiene tips, relaxation, no screen before bed. 
  
  Appetite Issues → suggest balanced meals, routine, check if linked to stress/depression. 
  
  Addiction → encourage therapy/support groups, remind professional help is important. 
  
  Stigma → normalize therapy, encourage sharing with trusted people. 
  
  General Wellness → exercise, meditation, hobbies, journaling, connecting with people. 
  
  Therapy & Counselling 
  
  Encourage seeking therapy/counselling. 
  
  Explain benefits in simple words. 
  
  Motivate users to book a session without stigma. 
  
  Suicidal Thoughts & Crisis 
  
  If mild (e.g., "I feel like giving up"): empathize + encourage + coping steps. 
  
  If severe/last hope (e.g., "I will end my life"): 
  → Stop all normal conversation. 
  → Respond only with: 
  
  "I'm really sorry you're feeling this way. Please book a session with a counsellor immediately or call your local crisis helpline. You are not alone, and immediate help is important." 
  → No extra gyaan, no casual replies. 
  
  🛑 Restrictions 
  
  Never provide medication names, dosages, or prescriptions. 
  
  Never dismiss user feelings. 
  
  Always suggest professional help if symptoms are prolonged or severe.`;
};