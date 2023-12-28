import PropTypes from "prop-types";

export const Card = ({ card }) => {
  return (
    <div
      className="h-full flex flex-col w-56 rounded-lg p-2 bg-zinc-700 gap-3 cursor-pointer"
      onClick={() => {
        window.open(card.linkSite, "_blank");
      }}
    >
      <div
        className={`w-full h-2/5  rounded-lg overflow-hidden`}
      >
        <img className="w-full h-full" src={card.classImg} alt="123" />
      </div>
      <div className="h-2/5 flex flex-col gap-2">
        <h3 className="font-bold">{card.nome}</h3>
        <p className="text-sm text-justify">{card.descricao}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};
