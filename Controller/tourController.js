const fs = require('fs');
const express = require('express');
const Tour = require('./../models/tourModel');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fails',
      message: 'invalid ID',
    });
  }
  next();
};

exports.checkBody = (req, res, next, val) => {
  if (!req.body.name === '') {
    return res.status(404).json({
      status: 'fails',
      message: 'Name or Price is Missinggg',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    length: tours.length,
    data: {
      tours,
    },
  });
};

exports.getToursByID = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id == id);
  res.status('200').json({
    status: 'success',
    data: {
      tour,
    },
  });
};

exports.updateTours = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id == id);
  const updateTour = req.body;
  console.log(Object.keys(updateTour));

  const newTour = Object.assign(tour, updateTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tours,
        },
      });
    }
  );
};

exports.deleteTours = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id == id);

  const index = tours.indexOf(tour);
  tours.splice(index, 1);

  res.status(204).json({
    status: 'success',
    data: null,
  });
};

exports.createNewTours = async (req, res) => {
  try {
    const tour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'Fail',
      message: 'FAILEDDD ...' + err,
    });
  }
  // const NewId = tours[tours.length - 1].id + 1;

  // const NewTour = Object.assign({ id: NewId }, req.body);

  // tours.push(NewTour);
  // fs.writeFile(
  //   `${__dirname}/dev-data/data/tours-simple.json`,
  //   JSON.stringify(tours),
  //   (err) => {
  //     res.status(201).json({
  //       status: 'success',
  //       data: {
  //         tours,
  //       },
  //     });
  //   }
  // );
};
