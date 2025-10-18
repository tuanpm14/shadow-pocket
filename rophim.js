const desiredCoinBalance = 999999999;
const desiredVipExpiresAt = 4096137600;
const desiredIsVip = true;

const targetPath = /v\d\/user\/info/;

let body = $response?.body;

if (typeof $request !== "undefined" && targetPath.test($request.url) && body) {
  try {
    const payload = JSON.parse(body);
    if (payload?.result) {
      payload.result.coin_balance = desiredCoinBalance;
      payload.result.vip_expires_at = desiredVipExpiresAt;
      payload.result.is_vip = desiredIsVip;
      body = JSON.stringify(payload);
    }
  } catch (err) {
    // Fall back to original body if parsing fails.
  }
}

$done(body ? { body } : {});
