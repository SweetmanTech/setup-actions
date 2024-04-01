export const ethGetLogsBatch = async (batchPayload: any[], endpoint: string) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(batchPayload),
    });
    const batchedLogs = await response.json();
    return batchedLogs.map((res: any) => res.result);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
};
