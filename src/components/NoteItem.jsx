import PropTypes from 'prop-types';

function NoteItem(props) {
  return (
    <>
      <li>
        <p className="item__descr">{props.descr}</p>
        <button onClick={props.delete}>Del</button>
      </li>
    </>
  );
}

NoteItem.propTypes = {
  descr: PropTypes.string,
  delete: PropTypes.func
};

export default NoteItem;