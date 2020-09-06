export default function dragStart(ev) {
  const event = ev;
  event.dataTransfer.dropEffect = "copy";
  event.dataTransfer.setData("text", ev.target.id);
};