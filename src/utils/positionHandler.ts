export const getCurrentPos = () => {
    if ("geolocation" in navigator) {
        return navigator.geolocation.getCurrentPosition(position => [position.coords.latitude, position.coords.longitude]);
    }
    return [];
}