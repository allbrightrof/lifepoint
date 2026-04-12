import {
  faHeart,
  faCalendarDays,
  faWater,
  faUsers,
  faHandsPraying,
  faMessage
} from "@fortawesome/free-solid-svg-icons";

export const events = [
    {
  id: 1,
  title: "Culpeper",
  address: "Culpeper County High School\n14240 Achievement Dr\nCulpeper, VA 22701",
  date: "Sundays",
  time: "9:00am and 10:45am",
  image: "/event1.jpg",
  link: "/events/culpeper"
},

{
  id: 2,
  title: "Fredericksburg",
  address: "Culpeper County High School\n14240 Achievement Dr\nCulpeper, VA 22701",
  date: "Sundays",
  time: "9:00am and 10:45am",
  image: "/event2.jpg",
  link: "/events/fredericksburg"
},

{
  id: 3,
  title: "Fredericksburg North",
  address: "Stafford High School\n63 Stafford Indians Ln\nFredericksburg, VA 22405",
  date: "Sundays",
  time: "9:00am and 10:30am",
  image: "/event3.jpg",
  link: "/events/fredericksburg-north"
},

{
  id: 4,
  title: "Richmond",
  address: "Glen Allen High School\n10700 Staples Mill Rd\nGlen Allen, VA 23060",
  date: "Sundays",
  time: "9:00am and 11:15am",
  image: "/event4.jpg",
  link: "/events/richmond"
},

{
  id: 5,
  title: "Spotsylvania",
  address: "Staples Mill Rd\nGlen Allen High School\n10700 Glen Allen, VA 23060",
  date: "Sundays",
  time: "10:00am and 11:45am",
  image: "/event5.jpg",
  link: "/events/spotsylvania"
},

{
  id: 6,
  title: "Louisville",
  address: "Glen Allen High School\nVA 23060 Staples Mill Rd\nGlen Allen",
  date: "Sundays",
  time: "9:00am and 11:45am",
  image: "/event6.jpg",
  link: "/events/louisville"
}
];

export const features = [
  {
    id: 1,
    title: "Get Involved",
    description: "Take your next step and find your place in what God is doing here.",
    icon: faHeart
  },
  {
    id: 2,
    title: "Upcoming Events",
    description: "Events at Lifepoint help you grow, connect, and move forward in faith.",
    icon: faCalendarDays
  },
  {
    id: 3,
    title: "Water Baptism",
    description: "Go public with your faith and celebrate new life.",
    icon: faWater
  },
   {
      id: 4,
      title: "Small Groups",
      description: "Build community and grow in faith by joining a small group today.",
      icon: faUsers
    },
    {
      id: 5,
      title: "Need Prayer",
      description: "Whatever you’re facing, we believe prayer changes everything.",
      icon: faHandsPraying
    },
    {
      id: 6,
      title: "Share Your Story",
      description: "Your story matters. Share with us what God has done in your life.",
      icon: faMessage
    }
];
