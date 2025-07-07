import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

const botResponses = {
  "skills": "Ayush specializes in React, TypeScript, Node.js, MongoDB, and modern web development. He has experience with GSAP animations, Framer Motion, and building full-stack applications.",
  "experience": "Ayush completed a React JS internship at Abstinent Research and Technologies (Sept-Nov 2024), where he worked on live projects including 'Vibe' with React Flow integration.",
  "education": "Currently pursuing B.Tech in Computer Science (Cyber Security) at Oriental College of Technology, Bhopal (2021-2025).",
  "projects": "Key projects include an Employee Management System (React, Node.js, MongoDB), Real-time Chat Application, and Recipe Management App. All showcase full-stack capabilities.",
  "contact": "You can reach Ayush at chhancharayush007@gmail.com, LinkedIn: /in/ayush-chhanchar-278a19231/, or GitHub: /ayushchhanchar",
  "default": "I'm here to help you learn more about Ayush! Ask me about his skills, experience, projects, education, or how to contact him."
}

export const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Ayush's AI assistant. Ask me about his skills, experience, or projects!",
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    if (message.includes('skill') || message.includes('tech') || message.includes('stack')) {
      return botResponses.skills
    } else if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return botResponses.experience
    } else if (message.includes('education') || message.includes('college') || message.includes('study')) {
      return botResponses.education
    } else if (message.includes('project') || message.includes('portfolio') || message.includes('app')) {
      return botResponses.projects
    } else if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
      return botResponses.contact
    } else {
      return botResponses.default
    }
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(236, 72, 153, 0.7)",
            "0 0 0 10px rgba(236, 72, 153, 0)",
            "0 0 0 0 rgba(236, 72, 153, 0)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <FiMessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 text-white flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Ayush's AI Assistant</h3>
                <p className="text-xs opacity-90">Ask me anything!</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                        : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 p-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <FiSend size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}