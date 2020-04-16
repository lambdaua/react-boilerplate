const devEnv = {
};

const prodEnv = {
};

module.exports = {
    env: {
        ...(process.env.NODE_ENV === 'production' ? prodEnv : devEnv),
    },
};
