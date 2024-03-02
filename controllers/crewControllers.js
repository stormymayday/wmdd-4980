const express = require('express');
const Crew = require('../modules/crewModule');

exports.createCrewMember = async (req, res) => {
  try {
    const newCrewMember = await Crew.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        user: newCrewMember,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.getCrewMembers = async (req, res) => {
  try {
    const CrewMembers = await Crew.find(req.query);

    res.status(200).json({
      status: 'success',
      data: {
        CrewMembers,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.getOneCrewMember = async (req, res) => {
  console.log(req.params.id);

  try {
    const CrewMember = await Crew.findById(req.params.id);
    if (!CrewMember) {
      return res.status(404).json({
        status: 'fail',
        message: 'Crew member was not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        CrewMember,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.updateCrewMember = async (req, res) => {
  try {
    const CrewMemberUpdated = await Crew.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!CrewMemberUpdated) {
      return res.status(404).json({
        status: 'fail',
        message: "Couldn't update crew member not found",
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        CrewMemberUpdated,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.deleteCrewMember = async (req, res) => {
  try {
    const deletedFlight = await Flight.findByIdAndDelete(req.params.id);

    if (!deletedFlight) {
      return res.status(404).json({
        status: 'fail',
        message: 'Flight not found',
      });
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};
