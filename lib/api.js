const people = [
    {
        name: { first: "Ava", last: "Smith" },
        jobTitle: "Software Engineer",
        company: "InnoTech",
        slug: "ava-smith",
    },
    {
        name: { first: "Liam", last: "Johnson" },
        jobTitle: "Product Manager",
        company: "InnoTech",
        slug: "liam-johnson",
    },
    {
        name: { first: "Olivia", last: "Williams" },
        jobTitle: "UX Designer",
        company: "InnoTech",
        slug: "olivia-williams",
    },
    {
        name: { first: "Noah", last: "Brown" },
        jobTitle: "Data Scientist",
        company: "InnoTech",
        slug: "noah-brown",
    },
    {
        name: { first: "Emma", last: "Jones" },
        jobTitle: "Cloud Solutions Architect",
        company: "InnoTech",
        slug: "emma-jones",
    },
    {
        name: { first: "Oliver", last: "Garcia" },
        jobTitle: "DevOps Engineer",
        company: "InnoTech",
        slug: "oliver-garcia",
    },
    {
        name: { first: "Sophia", last: "Miller" },
        jobTitle: "Cybersecurity Specialist",
        company: "InnoTech",
        slug: "sophia-miller",
    },
    {
        name: { first: "Isabella", last: "Davis" },
        jobTitle: "Network Administrator",
        company: "InnoTech",
        slug: "isabella-davis",
    },
    {
        name: { first: "Mason", last: "Rodriguez" },
        jobTitle: "IT Support Technician",
        company: "InnoTech",
        slug: "mason-rodriguez",
    },
    {
        name: { first: "Mia", last: "Martinez" },
        jobTitle: "Frontend Developer",
        company: "InnoTech",
        slug: "mia-martinez",
    },
];

const openWeatherApiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

export function getPeople() {
    return people;
}

/* Async and await tags inform javascript that it's okay to wait for this while rest of program executes. */
/*
export async function getWeatherData() {
   const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=13244&appid=ed0f3a3b23880c4d788f713484861539&units=imperial`);
   const data = await response.json();
   return data;
} */

export async function getWeatherDataByLatLon(position) {
    /* latitude and logitude are specified exactly by these names. You must them the same in assignment here. */
    const { latitude, longitude } = position.coords;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${openWeatherApiKey}&units=imperial`);
    const data = await response.json();
    return data;
}

export const getGeoLocation = () => {
    // Promise states: pending, resolved, rejected
    // Need to supply two argument names(just names---the functions are defined behind scenes!): resolve(value), reject(reason)
    return new Promise((resolve, reject) => {
        /* Navigator is a built in API object that has information about cookies, geolocation, etc... if the browser supports them. */
        if ("geolocation" in navigator) {
            //resolve();
            // getCurrentPosition requires a success and error function
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve(position);
                },
                () => {
                    reject("User denied geolocation");
                });
        } else {
            reject("Geolocation is not supported.");
        }
    });
}