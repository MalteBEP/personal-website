
export const handleScroll = (id:string)=> {
    if (id == "#home") {
        window.location.href = id;
        window.scrollTo(0, 0);
    } else {
        window.location.href = id;
    }
}