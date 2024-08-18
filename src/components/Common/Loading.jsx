export const Loading = () => {
    return (
        <div style={{
            height: "95%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            scrollbarWidth: "none"
        }}>
            <img src={"/Rolling.gif"} alt="loading" />
        </div>
    )
}