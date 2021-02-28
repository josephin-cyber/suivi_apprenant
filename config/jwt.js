const jwt = require('jsonwebtoken');
const accessTokenSecret="2JuuInNNvvPAKUTh3Gr6mogX9f81QVIfh4TTEa6OPXGh8t0gsP01OxECxXdCVa1GNWfN9hKwrkG8ZoDR8xObHo9ohjipP1SHwVxPI3A2hDpCopEnlQaEwFaM8ifBQT9IHNRauM8oWnOxUkI44Zu2c7DXawJHvcBDLq6s1spsIvo99Ib6wizJcjldB5eal73KOZCGxOtd8udy0L34DG3eXbyyxxG50FMDPtHEz77rI4v9PR7RlQdNTR3r6S84QUOE8KRPgurbveaF10g1mge8QD0u2TifzXeFNeCq7Cclxul2MUWubLQtAQjqhJmOePIKyyANLo3qTR34TUQ97aG1mPCpdHjUKgYCiPPyzhyAlpnErxCG5tdYNzx5tqyHm8SpyYX47DaC1EwT4lmWuR2byatuwwLtCrVXPjmZR8R4zgscRb6QEbrK5oo15eQKWh4WV0JtMb9lPkqmC1ywKNnrilVgYeQP90xDdxRyzTnExviGpdHK3pEF";

exports.accessTokenSecret=accessTokenSecret;

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

exports.authenticateJWT=authenticateJWT;