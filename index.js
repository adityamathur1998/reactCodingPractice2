const Button = (props) => {
  //  Write your code here.
  {className,buttonText} = props;

  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-button-container">
    <div className="content-container">
      <h1 className="heading">Social Button</h1>
      <div className="button-container">
        <Button className="like-button" buttonText="Like" />
        <Button className="comment-button" buttonText="Comment" />
        <Button className="share-button" buttonText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
