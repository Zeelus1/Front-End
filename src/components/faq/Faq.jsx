import React, { useState } from "react";
import styles from "./Faq.module.css";
import IconInterrogacao from "../../icons/pontoInterrogacaoFAQ.png";

// Componente pode receber props para customização
export default function Faq({
  data = [],
  title,
  icon = IconInterrogacao,
  className = "",
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`${styles.faqWrapper} ${className}`}>
      {title && <h2 className={styles.faqTitle}>{title}</h2>}

      <div className={styles.faqContainer}>
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.faqItem} ${
              openIndex === idx ? styles.active : ""
            }`}
          >
            <button
              className={styles.faqQuestion}
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
                <span className={styles.questionText}>{item.question}</span>
              </div>
              <span className={styles.plus}>
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
              <div className={styles.answerContent}>{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
