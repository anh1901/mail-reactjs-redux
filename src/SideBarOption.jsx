import "./SideBarOption.css";

function SideBarOption({ Icon, Title, Number, selected }) {
  return (
    <div className={`sidebar_option ${selected && "sidebar_option--active"}`}>
      <Icon />
      <h3>{Title}</h3>
      <p>{Number}</p>
    </div>
  );
}

export default SideBarOption;
