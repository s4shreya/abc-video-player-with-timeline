const Timeline = (props) => {
  const timelineItemsArray =  props.timelineItems;
  
  console.log(`in app ${JSON.stringify(timelineItemsArray)}`);
  return (
    <div>Timeline
      {/* {timelineItemsArray.map(data => <p>data is {data.offset}</p>)} */}
    </div>
  )
}
export default Timeline