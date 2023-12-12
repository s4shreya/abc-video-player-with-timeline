import { useState } from "react";

const TimelineCard = (props) => {
  const [displayEntities, setDisplayEntities] = useState(false);

  const data = props.data;
  const thumbnailImageURL =
    "https://s3.ap-southeast-1.amazonaws.com/vod-static-files.sensara.tv/" +
    data.image.substring(4);
  const offsetTime = [
    parseInt(data.offset_seconds / 3600),
    parseInt((data.offset_seconds % 3600) / 60),
    parseInt(data.offset_seconds % 60),
  ];

  const seekHandler = () => {
    props.seekToPositionHandler(data.offset_seconds);
    setDisplayEntities(true);
  };

  return (
    <>
      {/* TimelineCard */}
      <img
        src={thumbnailImageURL}
        width={300}
        height={200}
        alt={data.entities[0].item_title}
      />
      <button onClick={seekHandler}>data is {data.offset_seconds}</button>
      <p>
        Time :{" "}
        {offsetTime[0] > 1
          ? `${offsetTime[0]} hours `
          : `${offsetTime[0]} hour `}
        {offsetTime[1] > 1
          ? `${offsetTime[1]} minutes `
          : `${offsetTime[1]} minute `}
        {offsetTime[2] > 1
          ? `${offsetTime[2]} seconds `
          : `${offsetTime[2]} second `}
      </p>
      <p>{data.offset}</p>
      <div>{displayEntities && data.entities.length}</div>
    </>
  );
};
export default TimelineCard;
