import "./Thanks.css";

import { 
  BsFillEmojiHeartEyesFill, 
  BsFillEmojiSmileFill, 
  BsFillEmojiNeutralFill, 
  BsFillEmojiFrownFill,
 } from 'react-icons/bs'

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
}

const Thanks = ( {data} ) => {
  return (
    <div>
        <div className="thanks-container">
          <h2>Falta pouco...</h2>
          <p>A sua opinião é muito importante. Você receberá um 
            cumpom de 10% de desconto para sua próxima compra.</p>
          <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
          <h3>Aqui está o resumo da sua avaliação, {data.name}:</h3>
          <p className="review-data">
            <span>Satistação com o produto:</span>
            {emojiData[data.review]}
          </p>
          <p className="review-data">
            <span>Comentário:</span>
            {data.comment}
          </p>
        </div>
    </div>
  )
}

export default Thanks