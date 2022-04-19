module.exports = {
  testEnvironment: 'jsdom',
  rootDir: './src',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '.test.(tsx?)$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileMock.ts',
    '@/(.*)$': '<rootDir>/$1',
    '^components/(.*)': '<rootDir>/components/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
