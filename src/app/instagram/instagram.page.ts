import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.page.html',
  styleUrls: ['./instagram.page.scss'],
})
export class InstagramPage implements OnInit {
  public ind:any = [
    {
      user: {
        name: 'samantha',
        location: 'maldives',
        profileImg: '../../assets/icon/dip.jpg',
      },
      images: [
        '../../assets/icon/post1.jpg',
        '../../assets/icon/post2.jpeg',
        '../../assets/icon/post1.jpg',
        '../../assets/icon/post4.jpg'
      ],
      likes: '40K',
      comments: '15K',
      bookmarks: '23.4K',
      shares: '20K'
    },
    {
      user: {
        name: 'samantha',
        location: 'maldives',
        profileImg: '../../assets/icon/dip2.jpg',
      },
      images: [
        '../../assets/icon/post2.jpeg',
        '../../assets/icon/post2.jpeg',
        '../../assets/icon/post1.jpg',
        '../../assets/icon/post4.jpg'
      ],
      likes: '40K',
      comments: '15K',
      bookmarks: '13.4K',
      shares: '10K'
    },
    {
      user: {
        name: 'samantha',
        location: 'maldives',
        profileImg: '../../assets/icon/dip3.webp',
      },
      images: [
        '../../assets/icon/post3.jpeg',
        '../../assets/icon/post2.jpeg',
        '../../assets/icon/post1.jpg',
        '../../assets/icon/post4.jpg'
      ],
      likes: '80K',
      comments: '72K',
      bookmarks: '2.4K',
      shares: '5.4K'
    },
    // Add more posts as needed...
  ];
  constructor() { }

  ngOnInit() {
  }

}
