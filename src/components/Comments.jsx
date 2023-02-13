import React from "react";

const Comments = () => {
  const [comments, setComments] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [load, setLoad] = React.useState(false);

  const toggle = (i) => {
    setPage(i);
  };

  const fact = () => {
    setLoad(false);
    fetch(`https://jsonplaceholder.typicode.com/posts/${page}/comments`)
      .then((res) => res.json())
      .then((result) => {
        setComments(result);
        setLoad(true);
      });
  };

  React.useEffect(() => {
    fact();
  }, [page]);

  return (
    <>
      {load ? (
        <div className="comments-blog">
          <div className="pages">
            <div
              onClick={() => toggle(1)}
              className={page === 1 ? "page page-active" : "page"}
            >
              1
            </div>

            <div
              onClick={() => toggle(2)}
              className={page === 2 ? "page page-active" : "page"}
            >
              2
            </div>

            <div
              onClick={() => toggle(3)}
              className={page === 3 ? "page page-active" : "page"}
            >
              3
            </div>
          </div>
          <div className={page === 1 ? "comments comments-active" : "comments"}>
            <ul>
              {comments ? (
                comments.map((el, i) => {
                  return (
                    <li
                      style={{
                        border: "1px solid white",
                        padding: "8px",
                        listStyleType: "none",
                        marginTop: "10px",
                        color: "white",
                      }}
                      key={i}
                    >
                      {el.name}
                    </li>
                  );
                })
              ) : (
                <p>none</p>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className="loading">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
