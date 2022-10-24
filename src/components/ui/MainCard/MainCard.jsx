import Card from "react-bootstrap/Card";
import "./MainCard.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function MainCard({ link, img, title, body, buttonText, labels, date }) {
  return (
    <Card>
      <a href={link}>
        <div className="cardImg">
          <Card.Img variant="top" src={img} alt={title} />
        </div>
        <Card.Body>
          {labels && (
            <div className="labels">
              {labels.map((label, index) => {
                return (
                  <span
                    key={index}
                    style={{
                      backgroundColor: label.backgroundColor,
                      color: label.color,
                    }}
                  >
                    <small>{label.text}</small>
                  </span>
                );
              })}
            </div>
          )}
          <h3>{title}</h3>
          <Card.Text>{body}</Card.Text>
          {buttonText && <PrimaryButton text={buttonText} />}
          {date && (
            <div className="date">
              <p>{date}</p>
            </div>
          )}
        </Card.Body>
      </a>
    </Card>
  );
}

export default MainCard;
