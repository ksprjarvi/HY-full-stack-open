import Part from "./Part";

const Content = (props) => {
    return (
        <div>
            <Part course={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
            <Part course={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
            <Part course={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
        </div>
    )
}

export default Content;