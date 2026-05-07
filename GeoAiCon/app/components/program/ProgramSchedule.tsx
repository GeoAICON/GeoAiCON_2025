'use client'
import { useState } from "react"
import { scheduleData } from "@/app/data/scheduleData"
import ScheduleTable from "@shared/components/elements/ScheduleTable"

export default function ProgramSchedule() {
  const [activeTab, setActiveTab] = useState(0)

  const handleTab = (index: number) => {
    setActiveTab(index)
  }

  const currentDay = scheduleData[activeTab]

  return (
    <div className="schedule-section-area sp10">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tab-navigation-area mb-5">
              <ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
                {scheduleData.map((day, index) => (
                  <li className="nav-item" key={day.day}>
                    <button
                      className={`nav-link ${activeTab === index ? 'active' : ''}`}
                      onClick={() => handleTab(index)}
                      style={{
                        margin: '0 10px',
                        padding: '10px 30px',
                        borderRadius: '30px',
                        border: '1px solid #eee',
                        backgroundColor: activeTab === index ? '#0d6efd' : '#fff',
                        color: activeTab === index ? '#fff' : '#333',
                        fontWeight: 'bold',
                        transition: 'all 0.3s'
                      }}
                    >
                      {day.day}
                      <span style={{ display: 'block', fontSize: '12px', fontWeight: 'normal' }}>
                         {day.date.split(',')[1]}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="schedule-table-container">
              <ScheduleTable 
                day={currentDay.day} 
                sessions={currentDay.sessions} 
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .nav-link:hover {
            background-color: #0d6efd !important;
            color: #fff !important;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(13, 110, 253, 0.2);
        }
      `}</style>
    </div>
  )
}
