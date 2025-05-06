import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

// Lazily initialize so cold starts aren’t repeated
let adminInitialized = false;
function initAdmin() {
  if (adminInitialized) return;
  initializeApp({
    credential: cert({
      projectId:    noldy22-7836c,
      clientEmail:  firebase-adminsdk-fbsvc@noldy22-7836c.iam.gserviceaccount.com,
      privateKey:   -----BEGIN PRIVATE KEY-----
      MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDU57V+gg58y0sa
      dGoWOi4d1VBymveRj+PkGkez03mbdEL/muUvf/V8xriyVeYBm09i9QLerXCa32EI
      Ai9gdOKTqlFQHtH4oQQe+URwcQgwrYhk6e/Yfm+O4tgavPBvXNRTzI24irHPW29d
      IQcqV4UhCgshQR4gLXQ8RJGFLhlwBE7qHdBclBJFChhAvPq5q7AX5hJUFXDKDD7P
      lzK8bHh4JastmTWu2xMU2NXy6sH0TjelP+CTiPn2KtOm1Q6vT0BiHybOwehUAN3K
      W6nflvdmQso8TEzWmPw/5qrgxC6EYWFum9wr+bYgA3ok/n1sA5KZdnlq450spO/p
      K3zyqoizAgMBAAECggEAGMWXrySKyFJkZquXkbErSdABZZRKVzwavqD1fs2Nn1zO
      VCyS8LfpZEnq64plvKzJdoYeKLKddiek2T2ygtKWxP+oKQkCUp90JKEe1Bu9YYyP
      YM58raqTEwOp3qflLHqXPzjUXzMkBTBqVgz7EcjPy0xT3IarGVYF6Y1A2/IahkHZ
      DPEonpUptTxwvNYOFwTUqTzLa9jEcuPcPMj20lZGJY61GK+XlHevjTUXxE1WTkT8
      XG70gOaUwg68ZLRYgjcFil9jPmGvnC8MXDIo7AMx3gDVbHolIWcWoAoseWFU27A4
      ZpflFwI1cyE1o0/LrGS7NoZBw1M4h6mkjPlVoiq2YQKBgQDwvHZZkIZlwIR66qYr
      eohX/GVUoDQr2QrwbsGCa+GWin3C0L6zmq98pwtUjQGnk9Uq/GnyE7FnBVokEVsS
      ugW7LbMbqQGROcN+czicGKmBvRBX3oPcJzMtgmbYGQMmxXdCwv52URhARqxFF4+3
      P0AzbYAs5PgJEOSP/B2mqAqvZwKBgQDiZ4De4UGLZuf7eZT86eaREO9IoC2JIIh5
      pHnkk5sGmE8Nq7P1TAOz/MEePu3783+hfmxZTxTBEel96ml4fhlRl0XC+Yn5zFou
      fAbQyBZmRFg++qWx4Bex8SyAhU9NOoOQiu2Izpgq9c9qQh2QLyqyuX+T3fsdv2CH
      oexPwB2o1QKBgQDH2j2KV2Arwup4vKqc98mO+dsJqUIGkNXzCo+dfYA3INwMyo02
      v5kmK+tNEw6nlyPl3sz5if3B4ACYZswrvMEbRnIl6WWCseio5nC9rf+y1EloGTNw
      ph5njpVgm0sxecdrZkQn52Txn3pOlaPa5iifSS2al6+OnzaQjiXzgBf2ywKBgErO
      VCBQYS3ERKYsl/Ow/QO1irp+Yk1KuI0osTW7J5/YN1aXAxDrmtWfj9eEh3GWFPex
      I++mV38rgfCewVaUo5z31I8FkHc+9BUj2cSmN/B2aIn2m0TYfDvJKiEU6wzjZpEd
      tjpbuJ+JNI0xZz86tmrzK5oZ4F0F3Mkz0TbQjXw5AoGAPZsfMrScPgt8Gf2zokkP
      ngAuzAd9bYswFwX4T2HCorlkdTGYtomXS8k4fEY0UjNje/YSQosen1t8oDF+N/Od
      bYLxTaXMnTe+Ehuknygl90vj7T+mp/Dqa1D8u9E2khH+4eytmx7VrAgaNZlE9Rh5
      YlA+OYnfQt4NonwQOfWqxus=
      -----END PRIVATE KEY-----,
    }),
  });
  adminInitialized = true;
}

export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);

  // Only protect paths under /protected/
  if (url.pathname.startsWith('/products/') || url.pathname.startsWith('/services/')) {
    // grab fb_token cookie:
    const cookie = request.headers.get('cookie') || '';
    const match = cookie.match(/(?:^|;\s*)fb_token=([^;]+)/);
    const token = match && match[1];
    if (!token) return Response.redirect('/login', 302);

    try {
      initAdmin();
      await getAuth().verifyIdToken(token);
      // token valid → continue to page
      return next();
    } catch (e) {
      // invalid or expired → back to login
      return Response.redirect('/login', 302);
    }
  }

  // everything else flows through
  return next();
}
