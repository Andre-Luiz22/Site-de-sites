import PropTypes from "prop-types";

export const Card = ({ data }) => {
  return (
    <div
      className="w-56 p-2 bg-cardBg rounded-lg flex flex-col items-center cursor-pointer"
      onClick={() => {
        window.open(data.link, "_blank");
      }}
    >
      <div className="rounded-lg overflow-hidden mb-4">
        {/* imagem */}
        <img src={data.img} alt={data.alt} />
      </div>
      <div className="flex flex-col items-center text-cardText">
        {/* descrição */}
        <h3 className="text-xl font-bold">{data.title}</h3>
        <p className="text-sm">{data.desc}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};
