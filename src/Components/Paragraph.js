import "./paragraph.css";

export default function Paragraph(props){
    return (
        <div className="paragraph">
            <p className="para">
                {props.paragraph}
            </p>
        </div>
    );

}