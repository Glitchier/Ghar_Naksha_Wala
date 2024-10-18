import carousel1 from "../img/Carousel/1.webp";
import carousel5 from "../img/Carousel/5.webp";
import carousel6 from "../img/Carousel/6.webp";
import carousel7 from "../img/Carousel/7.webp";
import carousel8 from "../img/Carousel/8.webp";

import otherPhoto0 from "../img/Masonry/1.webp";
import otherPhoto1 from "../img/Masonry/2.webp";
import otherPhoto2 from "../img/Masonry/3.webp";
import otherPhoto3 from "../img/Masonry/4.webp";
import otherPhoto4 from "../img/Masonry/5.webp";
import otherPhoto6 from "../img/Masonry/6.webp";

import maleProf from "../assets/male.svg";
import femaleProf from "../assets/female.svg";

import prof1 from "/review/profileImg1.png";
import prof2 from "/review/profileImg2.png";
import prof3 from "/review/profileImg3.png";
import prof4 from "/review/profileImg4.png";
import prof5 from "/review/profileImg5.png";
import prof6 from "/review/profileImg6.png";

import latestWork1Photo1 from "/img/Latest_work/Latest_1/1.webp";
import latestWork2Photo1 from "/img/Latest_work/Latest_2/1.webp";
import latestWork3Photo1 from "/img/Latest_work/Latest_3/1.webp";
import latestWork3Photo2 from "/img/Latest_work/Latest_3/2.webp";
import latestWork3Photo3 from "/img/Latest_work/Latest_3/3.webp";

export const CarouselPhotos = [
  { url: carousel1, desc: "Living Room" },
  { url: carousel5, desc: "Bedroom" },
  { url: carousel6, desc: "Kitchen" },
  { url: carousel7, desc: "Banglow" },
  { url: carousel8, desc: "Building & Apartment" },
];

export const OtherPhotos = [
  otherPhoto0,
  otherPhoto1,
  otherPhoto2,
  otherPhoto3,
  otherPhoto4,
  otherPhoto6,
];

export const Employee = [
  {
    name: "vikas singh",
    designation: "director",
    sex: "male",
    pic: maleProf,
  },
  {
    name: "sumit",
    designation: "architecture",
    sex: "male",
    pic: maleProf,
  },
  {
    name: "garima singh",
    designation: "HR manager",
    sex: "female",
    pic: femaleProf,
  },
  {
    name: "anuska choubey",
    designation: "accountant",
    sex: "female",
    pic: femaleProf,
  },
  {
    name: "shani oraon",
    designation: "marketing manager",
    sex: "male",
    pic: maleProf,
  },
  {
    name: "kashyap",
    designation: "site supervisor",
    sex: "male",
    pic: maleProf,
  },
];

export const LatestWorkData: Record<
  string,
  {
    client: string;
    type: string;
    location: string;
    area: string;
    status: boolean;
    pic: string[];
  }
> = {
  "0001": {
    client: "Baleshwar Kujur",
    type: "G+1 Residential Building",
    location: "dhurwa, ranchi",
    area: "2200 sq ft",
    status: false,
    pic: [latestWork1Photo1],
  },
  "0002": {
    client: "Rahul",
    type: "G+2 Residential Building",
    location: "dhurwa, ranchi",
    area: "6000 sq ft",
    status: false,
    pic: [latestWork2Photo1],
  },
  "0003": {
    client: "mayanti sinha",
    type: "Kitchen Interior",
    location: "chas, bokaro",
    area: "100 sq ft",
    status: false,
    pic: [latestWork3Photo1, latestWork3Photo2, latestWork3Photo3],
  },
};

export const ReviewData = [
  {
    profilePic: prof1,
    name: "puja mishra",
    stars: 4,
    comment:
      "The quotation provided was easily understandable and reasonably priced. The response was speedy, and the service was quick. They also offered flexible appointments, making it very convenient. Overall, a cost-efficient and reliable option for repair and services!",
  },
  {
    profilePic: prof2,
    name: "nisha toppo",
    stars: 5,
    comment:
      "They responded quickly, provided fast service, and gave me an easily understandable quotation. Plus, they were very flexible with appointments. Highly recommended!",
  },
  {
    profilePic: prof3,
    name: "deependra singh",
    stars: 5,
    comment:
      "Their speedy response to my repair request was impressive. The technician arrived promptly and resolved the issue efficiently. I highly recommend their services!",
  },
  {
    profilePic: prof4,
    name: "Abhay Kumar",
    stars: 4,
    comment:
      "I recently used Ghar Naksha Wala for some repairs and their service was excellent. The cost was very reasonable and the quotation was easily understandable. They responded quickly, and the service was done in no time. They also offered flexible appointments which made it very convenient for me. Overall, I had an excellent experience with them.",
  },
  {
    profilePic: prof5,
    name: "Kanhaiya Singh",
    stars: 5,
    comment:
      "They offered flexible appointments, a speedy response, and quick service. The cost was efficient and reasonably priced. The quotation provided was easily understandable. Overall, I highly recommend their services!",
  },
  {
    profilePic: prof6,
    name: "Kiran",
    stars: 4,
    comment:
      "Ghar Naksha Wala provides excellent service! They responded quickly, offered flexible appointments, and completed the job fast. Their pricing is reasonable and the quotation was easy to understand. Highly recommended!",
  },
];
