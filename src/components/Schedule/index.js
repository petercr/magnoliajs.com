import React from 'react';

export default function Schedule({ day }) {
  if ( day === 'workshop' ) {
    return (
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
            <th>Instructor</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><time>8:30am</time></td>
            <td>Arrivals, set up</td>
            <td></td>
            <td>3rd Floor</td>
          </tr>
          <tr>
            <td><time>9:00am</time></td>
            <td>Get in the Fast Lane: Measuring Web Performance</td>
            <td>Sia Karamalegos</td>
            <td>3rd Floor - Room 214A</td>
          </tr>
          <tr>
            <td><time>9:00am</time></td>
            <td>Zero Dependency Components: Introduction to Web Components</td>
            <td>Nate Clark</td>
            <td>3rd Floor - Room 213</td>
          </tr>
        </tbody>
      </table>
    )
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Event</th>
          <th>Speaker</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><time>7:30am - 10:00am</time></td>
          <td>Registration</td>
          <td></td>
          <td>3rd Floor Corridor</td>
        </tr>
        <tr>
          <td><time>9:00am</time></td>
          <td>Empower Through Web Development</td>
          <td>Blake Watson</td>
          <td>Main Stage - Theater</td>
        </tr>
        <tr>
          <td><time>9:30am</time></td>
          <td>Master the JavaScript Interview</td>
          <td>Tyler Clark</td>
          <td>Main Stage - Theater</td>
        </tr>
        <tr>
          <td><time>9:55am</time></td>
          <td>Renderless Components with Hooks</td>
          <td>Ken Wheeler</td>
          <td>Main Stage - Theater</td>
        </tr>
        <tr>
          <td><time>10:25am</time></td>
          <td>Break</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><time>10:35am</time></td>
          <td>The Future of Front-End Performance</td>
          <td>Sia Karamalegos</td>
          <td>Main Stage - Theater</td>
        </tr>
        <tr>
          <td><time>11:05am</time></td>
          <td>The WebAssembly Revolution Has Begun</td>
          <td>Jay Phelps</td>
          <td>Main Stage - Theater</td>
        </tr>
        <tr>
          <td><time>11:35am</time></td>
          <td>Using JS to Bridge the Tech and Culture Gap</td>
          <td>Michael Liendo</td>
          <td>Main Stage - Theater</td>
        </tr>
        <tr>
          <td><time>12:00pm</time></td>
          <td>Transition to Lunch</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><time>12:00pm - 1:40pm</time></td>
          <td>Lunch</td>
          <td></td>
          <td>Rooms 301-304</td>
        </tr>
        <tr>
          <td><time>12:20pm</time></td>
          <td>Overview: Mississippi Coding Academies</td>
          <td>Bryce Mullican</td>
          <td>Lunch Stage - Rooms 301-304</td>
        </tr>
        <tr>
          <td><time>12:30pm</time></td>
          <td>Join the Revolution</td>
          <td>Gant Laborde</td>
          <td>Lunch Stage - Rooms 301-304</td>
        </tr>
        <tr>
          <td><time>1:30pm</time></td>
          <td>Break</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><time>1:40pm</time></td>
          <td>JavaScript: who, what, where, why and next</td>
          <td>Laurie Voss</td>
          <td>Main Stage - Theater</td>
        </tr>
        <tr>
          <td><time>2:10pm</time></td>
          <td>Dissecting the fluff from the buff of TDD, Twitter Driven Development</td>
          <td>Justin Samuels</td>
          <td>Main Stage - Theater</td>
        </tr>
        <tr>
          <td><time>2:35pm</time></td>
          <td>How to Avoid SUX (Some User Experience)</td>
          <td>Kayla Sween</td>
          <td>Main Stage - Theater</td>
        </tr>
        <tr>
          <td><time>3:00pm</time></td>
          <td>Break</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><time>3:10pm</time></td>
          <td>Full Stack Development in the Era of Serverless Computing</td>
          <td>Nader Dabit</td>
          <td>Main Stage - Theater</td>
        </tr>
        <tr>
          <td><time>3:40pm</time></td>
          <td>The Future of JavaScript Apps is Gatsby.js</td>
          <td>Joe Previte</td>
          <td>Main Stage - Theater</td>
        </tr>
        <tr>
          <td><time>4:10pm</time></td>
          <td>Break</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><time>4:20pm</time></td>
          <td>Buliding the Next Generation of Mobile Apps Using Draftbit</td>
          <td>Peter Piekarczyk</td>
          <td>Main Stage - Theater</td>
        </tr>
        <tr>
          <td><time>4:45pm</time></td>
          <td>So Many Hats: Security for Web Developers</td>
          <td>Vince Falconi</td>
          <td>Main Stage - Theater</td>
        </tr>
        <tr>
          <td><time>5:10pm</time></td>
          <td>Writing Code Saved My Life</td>
          <td>Kurt Kemple</td>
          <td>Main Stage - Theater</td>
        </tr>
        <tr>
          <td><time>5:40pm</time></td>
          <td>Door Prizes / Announcements / Dismissal</td>
          <td>J.C. Hiatt / Kenneth LaFrance</td>
          <td>Main Stage - Theater</td>
        </tr>
        <tr>
          <td><time>8:30pm</time></td>
          <td>After Party - Open Invite!</td>
          <td></td>
          <td><a href="https://www.google.com/maps/place/Fondren+Public/@32.3335561,-90.1775031,17z/data=!3m1!4b1!4m5!3m4!1s0x862832e9d6869733:0xc8ea3c87956e4dda!8m2!3d32.3335516!4d-90.1753144">Fondren Public</a></td>
        </tr>
      </tbody>
    </table>
  )
}