import React, { useRef } from 'react';
import styles from './CommentInput.module.css';
import IconComentario from '../../icons/messageicon.png'; 

function CommentInput() {
  const textareaRef = useRef();

  const autoResize = () => {
    const el = textareaRef.current;
    el.style.height = "auto"; // resetar antes de ajustar
    el.style.height = el.scrollHeight + "px"; // ajustar para o conteúdo
  };

  return (
    <div className={styles.container}>
      <textarea
        ref={textareaRef}
        placeholder="Adicione um Comentário!"
        className={styles.input}
        rows={1}
        onInput={autoResize}
      />
      <img src={IconComentario} alt="Comentário" className={styles.icon} />
    </div>
  );
}

export default CommentInput;