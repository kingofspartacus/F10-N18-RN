export default {
    port: 8000,
    host: 'localhost',
    dbUri: 'mongodb+srv://admin:admin@cluster0.gfyr4.mongodb.net/vmoUser?retryWrites=true&w=majority',
    saltWorkFactor: 10,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIICXQIBAAKBgQDZJP3QBEhheliWXYqbTQICms8ktzvapVO9H9fN1+cS2FR3BPEk
    HhpzDOT/9V1JKx3nVF8cpTj5L/eOyNeZvjjPYbflV3zJnmWTURvd+LX7DpSG6CK+
    Zg7fvBuR7QBvPj6rRggPDEOEKLV1M1LZE+N4Nb2b0j/6SJyF3WXuASrQOwIDAQAB
    AoGAeXFb1nQeuw2+79G/DF5ESoqkYUdtXTprm/FsM36ViI+epbYI24dOiZvjk1d5
    5csMfW1NiGrLc2olTSD8m8qsYB92X3sUom1JLFl1rO7Pb/gvAcYQAxinNskYrULf
    vYGuXF8XvNl1Z9wKNXsjxAH7PTouTEMhBMfYFNs/spNmmpECQQD6V3x8wvdGLgI5
    rw/XCYcwGRDacn0CrvYXR05GHnEKt3mLSN89mRkZsXLgNi5Gt8d1k/cRCj+HAM41
    BMPSlCoDAkEA3g1rzHS1DznE96VOcijW93kCiaKykrS25l4kJ8CZCTXeBma8hy2p
    BXXi7WALfRJUGzjNvIAbdODdgtA/CWqHaQJBAItSTxS8CJPFHTXvKJibU+I/wPJh
    zxLEPm78HyLE5FJ7g6gxmRQV9TMoX29Kl/yBYP8dpt2T34EJwLke+sBh9vMCQEdq
    nZ8Wch1BgT385qwEwo65Vr2ZnEFe6exRnuNCKHYz4wLADCaV4uSks6WQ3GEPggl3
    TYQw16PRpqyp+Xw3zPECQQCmAW/9veGkHn+oV5xtLrlOLIq5+N7jxLUH0Nz2nRv8
    NbHaeIvfZknzIgh0kdRJhDGd6fSG7U0vIjjHp5jRIAop
    -----END RSA PRIVATE KEY-----`,
    accessTokenTtl: '30m',
    refreshTokenTtl: '1y',
}