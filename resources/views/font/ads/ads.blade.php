@extends('layouts.dashboard')
@section('page_title')
Your Ads
@endsection
@section('content')
<div class="content-body">
    <!-- row -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Your ads</h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="example4" class="display min-w850">
                                <thead>
                                    <tr>
                                        <th>Ads ID</th>
                                        <th>Title</th>
                                        <th>Link</th>
                                        <th>Budget </th>
                                        <th>Status </th>
                                        <th>Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($ads as $key => $ad)
                                    <tr>
                                        <td>{{ $ad->ads_id }}</td>
                                        <td>{{ $ad->ads_title }}</td>
                                        <td>{{ $ad->ads_url }}</td>
                                        <td>{{ $ad->ads_price }} (tDND)</td>
                                        @if ($ad->status == "Inactive")
                                        <td>
                                            <a class="btn btn-sm btn-danger" href="{!! route('payments.ads', $ad->id) !!}">
                                                <small>Pay Now</small>
                                            </a>
                                        </td>
                                        @elseif ( $ad->status == "Paused" )
                                        <td>
                                            <span class="badge light badge-warning">Paused</span>
                                        </td>
                                        @else
                                        <td>
                                            <span class="badge light badge-success">Active</span>
                                        </td>
                                        @endif
                                        <td>{{ $ad->created_at->format('Y/d/m'); }}</td>
                                        <td>
                                            <div class="d-flex">
                                                <a href="{!! route('ads.details', $ad->id) !!}" title="Approve this AD without paying" class="btn btn-info shadow btn-xs sharp mr-1"><i class="fa fa-eye"></i></a>
                                                @if ($ad->status == "Paused" || $ad->status == "Inactive")
                                                <a href="{!! route('payments.ads.approve', $ad->id) !!}" title="Approve this AD without paying" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-check"></i></a>
                                                @else
                                                <a href="{!! route('payments.ads.stop', $ad->id) !!}" title="Stop the ad" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-remove"></i></a>
                                                @endif

                                            </div>
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
