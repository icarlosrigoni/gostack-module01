"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUsers_1 = __importDefault(require("./services/CreateUsers"));
function helloWorld(request, response) {
    var user = CreateUsers_1.default({
        email: 'danrigonisocial@gmail.com',
        password: '123456',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
            { title: 'JavaScript', experience: 100 },
        ],
    });
    return response.json({ message: 'Hello world ts' });
}
exports.helloWorld = helloWorld;
