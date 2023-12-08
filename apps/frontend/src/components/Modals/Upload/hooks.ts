import { useEffect, useState } from 'react';

export function useFileUploadModal(isRefresh: boolean) {
  const [stage, setStage] = useState(0);

  const onNext = () => {
    if (stage === 2) return;
    setStage(stage + 1);
  };

  useEffect(() => {
    setStage(1);
  }, [isRefresh]);

  return { onNext, stage };
}
