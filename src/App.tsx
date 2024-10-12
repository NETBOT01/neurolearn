import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Database, Server, MessageCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const HomePage = ({ onStartCourse }) => {
  const courses = [
    { id: 1, title: "SQL", icon: Database, comingSoon: true },
    { id: 2, title: "Data Structures and Algorithms", icon: BookOpen, comingSoon: false },
    { id: 3, title: "System Design", icon: Server, comingSoon: true },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to NeuroLearn</h1>
        <p className="text-xl text-gray-600">Select a course to begin your AI-powered learning journey</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col">
            <CardHeader>
              <div className="w-full h-48 bg-gray-300 rounded-t-lg flex items-center justify-center">
                <course.icon className="w-24 h-24 text-gray-600" />
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="text-xl font-bold mb-2">{course.title}</CardTitle>
              {course.comingSoon && (
                <Badge variant="secondary" className="mb-2">
                  Coming Soon
                </Badge>
              )}
              <p className="text-gray-600">
                {course.comingSoon
                  ? "This exciting course is currently in development. Stay tuned!"
                  : "Learn essential concepts and techniques in Data Structures and Algorithms."}
              </p>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={course.comingSoon ? "secondary" : "default"}
                disabled={course.comingSoon}
                onClick={() => onStartCourse(course.id)}
              >
                {course.comingSoon ? "Notify Me" : "Start Course"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

const CoursePage = ({ onNavigateHome }) => {
  const [chatOpen, setChatOpen] = useState(false)
  const [userSolution, setUserSolution] = useState('')

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-black text-white text-center py-4 shadow-md">
        <h1 className="text-2xl font-bold">NeuroLearn: AI-Powered Learning</h1>
      </header>

      <nav className="bg-gray-200 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Button 
            className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-gray-800 transition-colors"
            onClick={onNavigateHome}
          >
            Home
          </Button>
          <div className="flex items-center">
            <Input type="text" placeholder="Search questions..." className="mr-2" />
            <Button variant="outline">Sign Up / Sign In</Button>
          </div>
        </div>
      </nav>

      <main className="flex-grow py-8 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Problem: Merge Alternating Characters</CardTitle>
              </CardHeader>
              <CardContent>
                <p>You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.</p>
                <p className="mt-4 font-bold">Return the merged string.</p>
                <h3 className="mt-4 font-bold">Examples:</h3>
                <ul className="list-disc list-inside">
                  <li>Input: word1 = "abc", word2 = "pqr"<br />Output: "apbqcr"</li>
                  <li>Input: word1 = "ab", word2 = "pqrs"<br />Output: "apbqrs"</li>
                  <li>Input: word1 = "abcd", word2 = "pq"<br />Output: "apbqcd"</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code>{`def mergeAlternately(self, word1: str, word2: str) -> str:
    result = []
    i = 0
    while i < len(word1) or i < len(word2):
        if i < len(word1):
            result.append(word1[i])
        if i < len(word2):
            result.append(word2[i])
        i += 1
    return ''.join(result)`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>New Problem: Alternating Merge with Reverse</CardTitle>
              </CardHeader>
              <CardContent>
                <p>You are given two strings str1 and str2. Merge the strings by adding letters in alternating order, starting with str1. After alternating, if a string is longer than the other, append the remaining letters from the longer string in reverse order onto the end of the merged string.</p>
                <p className="mt-4 font-bold">Return the merged string.</p>
                <h3 className="mt-4 font-bold">Examples:</h3>
                <ul className="list-disc list-inside">
                  <li>Input: str1 = "abc", str2 = "defgh"<br />Output: "adbcehg"</li>
                  <li>Input: str1 = "xyz", str2 = "op"<br />Output: "xoyzp"</li>
                  <li>Input: str1 = "ab", str2 = "klmno"<br />Output: "akblonm"</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Your Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Please provide your solution to the new problem. You can describe your approach in plain language or write pseudocode.</p>
                <Textarea
                  value={userSolution}
                  onChange={(e) => setUserSolution(e.target.value)}
                  placeholder="Type your solution here..."
                  rows={10}
                  className="mt-4"
                />
                <Button className="bg-black text-white hover:bg-gray-800 mt-4" onClick={() => alert("Solution submitted!")}>Submit Solution</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button size="lg">Next Question</Button>
        </div>
      </main>

      <div className="fixed bottom-4 right-4">
        <Button
          size="icon"
          className="rounded-full w-12 h-12 bg-black text-white hover:bg-gray-800"
          onClick={() => setChatOpen(!chatOpen)}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {chatOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-lg">
          <div className="bg-black text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">AI Assistant</h3>
            <Button variant="ghost" size="sm" onClick={() => setChatOpen(false)}>×</Button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            {/* Chat messages would go here */}
          </div>
          <div className="p-4 border-t">
            <div className="flex">
              <Input type="text" placeholder="Type your question..." className="flex-grow mr-2" />
              <Button>Send</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedCourseId, setSelectedCourseId] = useState(null)

  const handleStartCourse = (courseId) => {
    setSelectedCourseId(courseId)
    setCurrentPage('course')
  }

  const handleNavigateHome = () => {
    setCurrentPage('home')
    setSelectedCourseId(null)
  }

  return (
    <div className="app">
      {currentPage === 'home' ? (
        <HomePage onStartCourse={handleStartCourse} />
      ) : (
        <CoursePage courseId={selectedCourseId} onNavigateHome={handleNavigateHome} />
      )}
    </div>
  )
}