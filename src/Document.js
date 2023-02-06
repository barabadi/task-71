
function Document({ title, content }) {
  const handleScroll = (event) => {
    if (event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight) {
      document.querySelector('button').removeAttribute('disabled');
    }
  };

  return (
<section>
      <h2 className="title">{title}</h2>
      <article className="content" style={{ overflow: 'auto', height: '200px' }} onScroll={handleScroll}>
        {content}
      </article>
      <button disabled>I Agree</button>
 </section>
  );
}

export default Document;

