import fs from "fs"

export const writeFile = (path, content) => {
    try {
        return fs.writeFileSync(path, JSON.stringify(content));
    } catch (error) {
        return error;
    }
};

export const readFile = (path) => {
    try {
        const data = fs.readFileSync(path);
        return data.toString();
    } catch (error) {
        return error;
    }
};

export const updateFile = (path, content) => {
    try {

        const data = fs.readFileSync(path);
        const newData = data.toString() + content +",";
        fs.writeFileSync(path, newData);
    } catch (error) {
        return error;
    }
}

export const deleteFile = (path) => {
    try {
        return fs.unlinkSync(path);
    } catch (error) {
        return error;
    }
};

