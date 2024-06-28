interface TakePhoto {
  cameraMode: string;
  fiter: string;
  burst: number;
}

interface SharePhoto {
  shareOn: string;
}

class instagram implements TakePhoto, SharePhoto {
  constructor(
    public cameraMode: string,
    public fiter: string,
    public burst: number,
    public shareOn: string
  ) {}
}
