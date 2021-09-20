import React from "react";

import {
  CaptionText,
  HeadingH5,
  RegularText,
  TestimoniesBlock,
} from "components";

import { Image } from "components";

import { grey } from "styles/colors";

const ReviewCard = () => {
  const REVIEWS = [
    {
      name: "Emily, 28",
      location: "Delaware, NJ",
      picture: "emily",
      review_text: {
        __html: `I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.`,
      },
      id: "1",
    },
    {
      name: "Kylie, 40",
      location: "Los Angeles",
      picture: "kylie",
      review_text: {
        __html: `I will be very straightforward - I hate sports and working out. <b>Positive Yoga</b> put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.`,
      },
      id: "2",
    },
    {
      name: "Jesica",
      location: "San Francisco, CA",
      picture: "jesica",
      review_text: {
        __html: `I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With <b>Positive Yoga</b> program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.`,
      },
      id: "3",
    },
  ];

  return (
    <>
      {REVIEWS.map((review) => {
        return (
          <TestimoniesBlock key={review.id}>
            <HeadingH5>{review.name}</HeadingH5>
            <CaptionText color={grey}>{review.location}</CaptionText>
            <Image src="stars_icon" />
            <Image src={review.picture} />
            <RegularText marginTop="2rem">
              <span dangerouslySetInnerHTML={review.review_text} />
            </RegularText>
          </TestimoniesBlock>
        );
      })}
    </>
  );
};

export default ReviewCard;
