function recalculateReadMoreButtons() {
    const eventBoxes = document.getElementsByClassName("eventBox")
    for (let eventBox of eventBoxes) {
        const eventText = eventBox.getElementsByClassName("eventText")[0] as HTMLElement;
        const readMore = eventBox.getElementsByClassName("readMore")[0] as HTMLElement;
        const eventTextIsOverflowing = eventText.scrollHeight > eventText.clientHeight;
        readMore.hidden = !eventTextIsOverflowing;
    }
}
window.addEventListener('resize', recalculateReadMoreButtons);
recalculateReadMoreButtons()