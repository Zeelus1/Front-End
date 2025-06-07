import React, { useState } from "react";
import styles from "./Faq.module.css";
import IconInterrogacao from "../../icons/pontoInterrogacaoFAQ.png";

// Componente pode receber props para customização
export default function Faq({
  data = [],
  title,
  icon = IconInterrogacao,
  className = "",
  titleColor,
  questionColor,
  answerColor,
  plusColor,
  showBorder = false
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`${styles.faqWrapper} ${className}`}>
      {title && (
        <h2
          className={styles.faqTitle}
          style={
            titleColor
              ? {
                  backgroundImage: "none",
                  WebkitTextFillColor: "initial",
                  color: titleColor,
                }
              : undefined
          }
        >
          {title}
        </h2>
      )}

      <div className={styles.faqContainer}>
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.faqItem} ${
              openIndex === idx ? styles.active : ""
            }`}
          >
            <button
              className={`${styles.faqQuestion} ${showBorder ? styles.withBorder : ""}`}
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
              id={`faq-question-${idx}`}
            >
              <div className={styles.questionContent}>
                <img
                  src={icon}
                  alt="Ícone"
                  className={styles.icon}
                  aria-hidden="true"
                />
                <span
                  className={styles.questionText}
                  style={questionColor ? { color: questionColor } : undefined}
                >
                  {item.question}
                </span>
              </div>
              <span className={styles.plus} style={plusColor ? { color: plusColor } : undefined}>
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>

            <div
              className={`${styles.faqAnswer} ${
                openIndex === idx ? styles.show : ""
              }`}
              id={`faq-answer-${idx}`}
              role="region"
              aria-labelledby={`faq-question-${idx}`}
            >
              <div
                className={styles.answerContent}
                style={answerColor ? { color: answerColor } : undefined}
              >
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
