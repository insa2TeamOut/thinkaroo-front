export const Loading = () => {
    return (
        <div style={{
            height: "95%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            scrollbarWidth: "none",
            width: "100%",
            backgroundColor:"#F5F5DC"
        }}>
            <img src={"/Rolling.gif"} alt="loading" />
        </div>
    )
}