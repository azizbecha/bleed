interface Props {
    children: React.ReactNode
}

export const Container: React.FC<Props> = (props) => {
    return (
        <div className="container mx-auto max-w-screen-xl mt-5 px-3 sm:px-10 py-6 lg:px-8">
            {props.children}
        </div>
    )
}