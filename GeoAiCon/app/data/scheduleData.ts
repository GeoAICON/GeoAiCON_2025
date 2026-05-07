
import { DaySchedule } from "@shared/lib/types";

export const scheduleData: DaySchedule[] = [
  {
    day: "Day 1",
    date: "Monday, October 23",
    sessions: [
      {
        id: 1,
        time: "09:00 - 10:00",
        title: "Registration & Breakfast",
        speaker: "",
        location: "Main Hall"
      },
      {
        id: 2,
        time: "10:00 - 11:30",
        title: "Keynote: Future of Geo-AI",
        speaker: "Dr. Jane Doe",
        location: "Auditorium A"
      }
    ]
  },
  {
    day: "Day 2",
    date: "Tuesday, October 24",
    sessions: [
      {
        id: 3,
        time: "09:00 - 10:30",
        title: "Workshop: Drone Mapping",
        speaker: "John Smith",
        location: "Lab 1"
      }
    ]
  }
];
