import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import avatar1 from "../../../assets/avatars/avatar-1.png";
import avatar2 from "../../../assets/avatars/avatar-2.png";
import avatar3 from "../../../assets/avatars/avatar-3.png";
import avatar4 from "../../../assets/avatars/avatar-4.png";

import "swiper/css";
import "swiper/css/pagination";

import { Container } from "../../common/Container";
import { SectionHeader } from "../../common/sectionHeader";
import { CommentHeader } from "./components/CommentHeader";
import { SwiperButtons } from "./components/SwiperButtons";

import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    image: avatar1,
    comment:
      "The counseling sessions provided here truly helped me understand the deeper layers of my personality and behavioral patterns. After months of feeling stuck, I finally feel more in control of my daily emotions and significantly more confident about my professional and personal future. The environment is safe, welcoming, and life-changing.",
    author: "Sarah Johnson",
    rating: 4,
    date: "24 May, 2025",
  },
  {
    id: 2,
    image: avatar2,
    comment:
      "I was skeptical about therapy at first, but the team here is professional, supportive, and truly caring in a way I hadn't experienced before. The therapists made me feel heard, validated, and respected from our very first session. They don't just listen; they provide actionable tools that have improved my quality of life immensely.",
    author: "Michael Chen",
    rating: 5,
    date: "15 October, 2023",
  },
  {
    id: 3,
    image: avatar3,
    comment:
      "Joining the weekly support group was easily the best decision I made for my mental health this year. It completely shifted my perspective and reminded me that I'm absolutely not alone in this difficult journey. Sharing experiences with others in a guided, professional setting gave me the strength to keep moving forward when things got tough.",
    author: "Floyd Myles",
    rating: 3,
    date: "8 April, 2022",
  },
  {
    id: 4,
    image: avatar4,
    comment:
      "I appreciated how the treatment plan was entirely personalized to my specific struggles rather than being a 'one size fits all' approach. It was highly effective and focused on long-term growth. Over the last year, I’ve seen a tangible, real improvement in my mental well-being, my relationships, and my overall outlook on life.",
    author: "Jenny White",
    rating: 4,
    date: "19 September, 2020",
  },
];

export function Testimonials() {
  return (
    <section>
      <SectionHeader
        title="What Our Clients Say"
        description="Real stories from people who have experienced meaningful change through our care and support."
      />
      <Container>
        <div className={styles.wrapper}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={`${styles.card} gradient-border`}>
                  <CommentHeader {...item} />
                  <p className={styles.comment}>{item.comment}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <SwiperButtons />
        </div>
      </Container>
    </section>
  );
}
