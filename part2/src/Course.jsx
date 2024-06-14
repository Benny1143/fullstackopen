const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <p>Total of {sum} exercises </p>

const Part = ({ part }) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Content = ({ parts }) =>
    <>
        {parts.map(part =>
            <Part key={part.id}
                part={part}
            />
        )}
    </>


const Course = ({ course }) => {
    const { parts, name } = course
    return (
        <>
            <Header course={name} />
            <Content parts={parts} />
            <b><Total sum={parts.reduce((sum, part) => sum + part.exercises, 0)} /></b>
        </>
    )
}
export default Course