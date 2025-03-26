import Link from "next/link"
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SchedulePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Event Schedule</h1>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Detailed timeline and schedule for the EEC Hackathon 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Pre-Hackathon Events</CardTitle>
                <CardDescription>March 1 - March 30, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-600 pl-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">March 1, 2025</span>
                    </div>
                    <h3 className="font-medium">Registration Opens</h3>
                    <p className="text-sm text-gray-500">
                      Team registration begins. Submit your team details to participate.
                    </p>
                  </div>
                  <div className="border-l-2 border-blue-600 pl-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">March 20, 2025</span>
                    </div>
                    <h3 className="font-medium">Registration & PPT Submission Deadline</h3>
                    <p className="text-sm text-gray-500">
                      Submit your PowerPoint presentation outlining your proposed solution.
                    </p>
                  </div>
                  <div className="border-l-2 border-blue-600 pl-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">March 25, 2025</span>
                    </div>
                    <h3 className="font-medium">Idea Pitching & Refinement</h3>
                    <p className="text-sm text-gray-500">
                      Top 100 teams present their ideas to a jury of industry professionals.
                    </p>
                  </div>
                  <div className="border-l-2 border-blue-600 pl-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">March 30, 2025</span>
                    </div>
                    <h3 className="font-medium">Final Team Selection</h3>
                    <p className="text-sm text-gray-500">Final 50 teams selected for the 48-hour hackathon.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Hackathon Day 1</CardTitle>
                <CardDescription>April 4, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-600 pl-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">13:00 - 14:30</span>
                    </div>
                    <h3 className="font-medium">Registration & Check-in</h3>
                    <p className="text-sm text-gray-500">Team registration, ID verification, and kit distribution.</p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span className="text-xs text-gray-500">MLCP Labs, Easwari Engineering College</span>
                    </div>
                  </div>
                  <div className="border-l-2 border-blue-600 pl-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">14:30 - 15:00</span>
                    </div>
                    <h3 className="font-medium">Inauguration Ceremony</h3>
                    <p className="text-sm text-gray-500">Welcome address, keynote speech, and event kickoff.</p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span className="text-xs text-gray-500">MLCP Labs, Easwari Engineering College</span>
                    </div>
                  </div>
                  <div className="border-l-2 border-blue-600 pl-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">15:00</span>
                    </div>
                    <h3 className="font-medium">Hackathon Begins</h3>
                    <p className="text-sm text-gray-500">Official start of the 48-hour hackathon.</p>
                  </div>
                  <div className="border-l-2 border-blue-600 pl-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">18:00 - 19:00</span>
                    </div>
                    <h3 className="font-medium">Mentor Session 1</h3>
                    <p className="text-sm text-gray-500">
                      Industry mentors available for guidance and technical support.
                    </p>
                  </div>
                  <div className="border-l-2 border-blue-600 pl-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">20:00 - 21:00</span>
                    </div>
                    <h3 className="font-medium">Dinner</h3>
                    <p className="text-sm text-gray-500">Dinner will be provided for all participants at the hostel.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Hackathon Day 2 & 3</CardTitle>
                <CardDescription>April 5-6, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-600 pl-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">April 5, 2025</span>
                    </div>
                    <h3 className="font-medium">Day 2 Schedule</h3>
                    <div className="space-y-2 mt-2">
                      <div>
                        <span className="text-xs font-medium">8:00 AM - 9:00 AM</span>
                        <p className="text-xs text-gray-500">Breakfast</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">12:00 PM - 1:00 PM</span>
                        <p className="text-xs text-gray-500">Lunch</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">3:00 PM</span>
                        <p className="text-xs text-gray-500">24-hour milestone check-in</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">5:00 PM - 6:00 PM</span>
                        <p className="text-xs text-gray-500">Mentor Session 2</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">8:00 PM - 9:00 PM</span>
                        <p className="text-xs text-gray-500">Dinner at the hostel</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-600 pl-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">April 6, 2025</span>
                    </div>
                    <h3 className="font-medium">Day 3 Schedule</h3>
                    <div className="space-y-2 mt-2">
                      <div>
                        <span className="text-xs font-medium">8:00 AM - 9:00 AM</span>
                        <p className="text-xs text-gray-500">Breakfast</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">12:00 PM - 1:00 PM</span>
                        <p className="text-xs text-gray-500">Lunch</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">2:00 PM</span>
                        <p className="text-xs text-gray-500">1-hour warning</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">3:00 PM</span>
                        <p className="text-xs text-gray-500">Hackathon Ends - Code Freeze</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">3:00 PM - 4:00 PM</span>
                        <p className="text-xs text-gray-500">Project Submission & Preparation for Presentations</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">4:00 PM - 5:30 PM</span>
                        <p className="text-xs text-gray-500">Project Presentations & Judging</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">5:30 PM - 6:30 PM</span>
                        <p className="text-xs text-gray-500">Closing Ceremony & Prize Distribution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-600 mb-4">
              Note: Schedule is subject to minor changes. All participants will be notified of any updates.
            </div>
            <div className="flex justify-center gap-4">
              <Link href="/register">
                <Button>
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

