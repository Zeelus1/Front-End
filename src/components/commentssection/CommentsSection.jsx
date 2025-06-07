import React from 'react';
import styles from './CommentsSection.module.css';
import CommentInput from '../commentImput/CommentInput';
import CommentCard from '../commentcard/CommentCard';
import User1 from "../../img/user1.png";
import User2 from "../../img/user2.png";
import User3 from "../../img/user3.png";

function CommentsSection() {
  const comentarios = [
    {
      id: 1,
      fotoPerfil: User1,
      nome: 'Alexander Kothe',
      data: '23/12/2024',
      texto: 'Meu sobrinho também tem sensibilidade! Brinquedos sensoriais ajudam muito.',
      likes: 4,
      comentarios: 1,
      favoritos: 2
    },
    {
      id: 2,
      fotoPerfil: User2,
      nome: 'Bárbara Lima',
      data: '25/12/2024',
      texto: 'Fones com cancelamento de ruído foram um divisor de águas pra gente! Minha filha usa quando estamos em ambientes lotados e parece que ela consegue se concentrar melhor. Se ainda não tentou, recomendo testar!',
      likes: 10,
      comentarios: 2,
      favoritos: 6
    },
    {
      id: 3,
      fotoPerfil: User3,
      nome: 'Elizabeth Webber',
      data: '26/12/2024',
      texto: 'Aqui em casa, quando meu caçula começa a ficar sobrecarregado, fazemos respirações profundas juntos: inspirar pelo nariz contando até 4, segurar por 4 segundos e expirar devagar pela boca. Parece simples, mas ajuda muito!',
      likes: 5,
      comentarios: 0,
      favoritos: 3
    }
  ];

  return (
    <div className={styles.commentsSection}>
      <CommentInput />
      <div className={styles.commentList}>
        {comentarios.map((c) => (
          <CommentCard
            key={c.id}
            fotoPerfil={c.fotoPerfil}
            nome={c.nome}
            data={c.data}
            texto={c.texto}
            likes={c.likes}
            comentarios={c.comentarios}
            favoritos={c.favoritos}
          />
        ))}
      </div>
    </div>
  );
}

export default CommentsSection;